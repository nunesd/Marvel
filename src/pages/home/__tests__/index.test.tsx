import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

import Home from '../';
import {
  errorMockResponse,
  successMockOneComic,
  successMockMultiComics,
} from '../__mocks__/mocks';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  mockedAxios.get.mockClear();
});

describe('Renders Home components correctly', () => {
  it('Renders not found text when the request is not successful', async () => {
    mockedAxios.get.mockRejectedValue(errorMockResponse);

    render(<Home />);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
    });

    expect(
      screen.getByText('Não há quadrinhos disponíveis'),
    ).toBeInTheDocument();
  });
  it('Renders comics list when the request is successful', async () => {
    mockedAxios.get.mockResolvedValue(successMockOneComic);

    render(<Home />);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
    });

    expect(screen.getByTestId('comics-container')).toBeInTheDocument();
  });

  it('Renders comics list when the request is successful', async () => {
    mockedAxios.get.mockResolvedValue(successMockMultiComics);

    render(<Home />);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
    });

    expect(screen.getByTestId('comics-container')).toBeInTheDocument();
  });
});
