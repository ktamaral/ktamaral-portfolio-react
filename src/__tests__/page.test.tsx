import React, { ReactNode } from 'react';
import { render } from '@testing-library/react'
import Page from '../components/Layout/Page';

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/index',
  }),
}))

// Mock 'next/head' to capture the side-effects on the document head
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }) => children,
  };
});

describe('Page Component', () => {
  it('renders the page with correct head elements', () => {
    const title = 'Test Title';
    const description = 'Test Description';

    render(
      <Page title={title} description={description}>
        <div>Test Child</div>
      </Page>
    );

    // Check if the title and meta tags are correctly set in Head
    // Note that next/head manages the document head, but doesn't render content in the DOM,
    // so use next/head's internal state to test this.
    // Check for title
    expect(document.title).toEqual(title);

    // Check for meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toBeTruthy();
    if (metaDescription) {
      expect(metaDescription.getAttribute('content')).toEqual(description);
    }

    // Check for canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink).toBeTruthy();
    if (canonicalLink) {
      expect(canonicalLink.getAttribute('href')).toEqual('https://katieamaral.com/index');
    }

  });
});
