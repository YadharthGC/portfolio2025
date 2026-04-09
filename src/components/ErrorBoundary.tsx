import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[40vh] items-center justify-center px-6">
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold" style={{ color: 'var(--text-1)' }}>
              Something went wrong
            </h2>
            <p className="mb-4 text-sm" style={{ color: 'var(--text-2)' }}>
              Try refreshing the page.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-all hover:bg-primary/90"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
