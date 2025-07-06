/**
 * Centralized error handling utilities
 * Provides consistent error logging and user feedback across the application
 */

export interface ErrorInfo {
  message: string
  code?: string
  context?: string
  timestamp: Date
}

export class AppError extends Error {
  public readonly code: string
  public readonly context: string
  public readonly timestamp: Date

  constructor(message: string, code = 'UNKNOWN_ERROR', context = 'APPLICATION') {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.context = context
    this.timestamp = new Date()
  }
}

/**
 * Log error to console in development or send to monitoring service in production
 */
export const logError = (error: Error | AppError, context?: string): void => {
  const errorInfo: ErrorInfo = {
    message: error.message,
    code: error instanceof AppError ? error.code : 'UNCAUGHT_ERROR',
    context: error instanceof AppError ? error.context : context || 'UNKNOWN',
    timestamp: new Date(),
  }

  // In development, log full details
  // In production, you might want to send errors to a monitoring service
  // like Sentry, LogRocket, or your own logging endpoint
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error('Error:', errorInfo.code, errorInfo.message)
  }
}

/**
 * Handle async operations with proper error catching
 */
export const safeAsync = async <T>(
  operation: () => Promise<T>,
  errorMessage = 'Operation failed',
  context = 'ASYNC_OPERATION'
): Promise<T | null> => {
  try {
    return await operation()
  } catch (error) {
    const appError =
      error instanceof Error
        ? new AppError(`${errorMessage}: ${error.message}`, 'ASYNC_ERROR', context)
        : new AppError(errorMessage, 'ASYNC_ERROR', context)

    logError(appError)
    return null
  }
}

/**
 * Handle form submission errors with user-friendly messages
 */
export const handleFormError = (error: Error, context = 'FORM_SUBMISSION'): string => {
  logError(error, context)

  // Return user-friendly error messages
  if (error.message.includes('network') || error.message.includes('fetch')) {
    return 'Network error. Please check your connection and try again.'
  }

  if (error.message.includes('validation')) {
    return 'Please check your form data and try again.'
  }

  return 'Something went wrong. Please try again later.'
}

/**
 * Handle analytics tracking errors silently
 */
export const handleAnalyticsError = (error: Error): void => {
  // Analytics errors should not affect user experience
  // Log silently without affecting the UI
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn('Analytics Error:', error.message)
  }
}

/**
 * Handle storage errors (localStorage, sessionStorage)
 */
export const handleStorageError = (_error: Error, operation: string): void => {
  const storageError = new AppError(
    `Storage operation failed: ${operation}`,
    'STORAGE_ERROR',
    'BROWSER_STORAGE'
  )
  logError(storageError)
}

/**
 * Generic error boundary for Vue composables
 */
export const withErrorHandling = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  context: string
): T => {
  return ((...args: Parameters<T>) => {
    try {
      return fn(...args)
    } catch (error) {
      const appError =
        error instanceof Error
          ? new AppError(`${context}: ${error.message}`, 'COMPOSABLE_ERROR', context)
          : new AppError(`${context}: Unknown error`, 'COMPOSABLE_ERROR', context)

      logError(appError)
      return null
    }
  }) as T
}
