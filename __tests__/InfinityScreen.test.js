// raiz/screens/InfitityScreen/InfinityScreen.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import InfinityScreen from './InfinityScreen';
import ProductService from 'services/ProductService';
import PurchaseService from 'services/PurchaseServices';

jest.mock('services/ProductService');
jest.mock('services/PurchaseServices');

describe('InfinityScreen', () => {
  it('renders products correctly', async () => {
    // Mock da resposta da API
    ProductService.getAll.mockResolvedValue({
      data: [
        { _id: '1', nome: 'Produto 1', quantidade: 10, preco: 100, imagem: 'https://example.com/image1.png' },
        { _id: '2', nome: 'Produto 2', quantidade: 5, preco: 200, imagem: 'https://example.com/image2.png' },
      ],
    });

    const { getByText, getAllByTestId } = render(<InfinityScreen loginResponse={{ user: { id: '123' } }} />);

    await waitFor(() => {
      // Verifica se os produtos são renderizados corretamente
      expect(getByText('Produto 1')).toBeTruthy();
      expect(getByText('Produto 2')).toBeTruthy();
      expect(getAllByTestId('product-item')).toHaveLength(2); // Assuming that each product has testID="product-item"
    });
  });

  it('handles product purchase correctly', async () => {
    // Mock da resposta da API
    ProductService.getAll.mockResolvedValue({
      data: [{ _id: '1', nome: 'Produto 1', quantidade: 10, preco: 100, imagem: 'https://example.com/image1.png' }],
    });
    
    PurchaseService.create.mockResolvedValue({});

    const { getByText, getByTestId } = render(<InfinityScreen loginResponse={{ user: { id: '123' } }} />);

    await waitFor(() => {
      // Verifica se o produto é renderizado corretamente
      expect(getByText('Produto 1')).toBeTruthy();
    });

    const purchaseButton = getByTestId('purchase-button-1'); // Assuming that each purchase button has testID="purchase-button-{productId}"
    fireEvent.press(purchaseButton);

    await waitFor(() => {
      // Verifica se a compra foi processada corretamente
      expect(PurchaseService.create).toHaveBeenCalledWith({
        userId: '123',
        productId: '1',
        quantity: 1,
        totalPaid: 100,
      });

      // Verifica se o alerta de sucesso é mostrado
      expect(getByText(/compra foi confirmada/i)).toBeTruthy();
    });
  });

  it('shows loading indicator while fetching products', () => {
    const { getByTestId } = render(<InfinityScreen loginResponse={{ user: { id: '123' } }} />);

    // Verifica se o indicador de carregamento é mostrado
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });
});
