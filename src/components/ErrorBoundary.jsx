import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error, errorInfo }) => {
  const { lang, langContent } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {langContent[lang].errorBoundary.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {langContent[lang].errorBoundary.message}
          </p>
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-4 bg-red-50 rounded-md text-left">
              <p className="text-sm text-red-800 font-mono">
                {error?.toString()}
              </p>
              <p className="mt-2 text-xs text-red-600 font-mono">
                {errorInfo?.componentStack}
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {langContent[lang].errorBoundary.reloadButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
