import {describe, it, expect} from 'vitest';
import {mount} from "@vue/test-utils";
import ProductsTable from "../ProductsTable.vue";
import {RouterLink} from "vue-router";

describe('ProductsTable', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductsTable, {
      props: {
        products: [
          {
            title: 'Product 1',
            category: 'Category 1',
            brand: 'Brand 1',
            price: 20,
            stock: 10,
            rating: 4.5,
          },
          {
            title: 'Product 2',
            category: 'Category 2',
            brand: 'Brand 2',
            price: 30,
            stock: 5,
            rating: 3.8,
          },
        ],
      },
      global: {
        components: {
          'router-link': RouterLink,
        },
      },
    });

    // Check that the component rendered without errors
    expect(wrapper.element).toBeTruthy();

    // Check that the table header is present
    expect(wrapper.findAll('th').text()).toContain('Title');
    expect(wrapper.findAll('th').text()).toContain('Brand');
    expect(wrapper.findAll('th').text()).toContain('Price');
    expect(wrapper.findAll('th').text()).toContain('Stock');
    expect(wrapper.findAll('th').text()).toContain('Rating');

    // Check that table rows rendered correctly
    const rows = wrapper.findAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].text()).toContain('Product 1');
    expect(rows[0].text()).toContain('Brand 1');
    expect(rows[0].text()).toContain('20');
    expect(rows[0].text()).toContain('10');
    expect(rows[0].text()).toContain('4.5');

    expect(rows[1].text()).toContain('Product 2');
    expect(rows[1].text()).toContain('Brand 2');
    expect(rows[1].text()).toContain('30');
    expect(rows[1].text()).toContain('5');
    expect(rows[1].text()).toContain('3.8');
  });

  it('renders the sort icon correctly', () => {
    const wrapper = mount(ProductsTable, {
      props: {
        products: [
          {
            title: 'Product 1',
            category: 'Category 1',
            brand: 'Brand 1',
            price: 20,
            stock: 10,
            rating: 4.5,
          },
          {
            title: 'Product 2',
            category: 'Category 2',
            brand: 'Brand 2',
            price: 30,
            stock: 5,
            rating: 3.8,
          },
        ],
      },
      global: {
        components: {
          'router-link': RouterLink,
        },
      },
    });

    // Sort by the "brand" field
    wrapper.vm.sort('brand');

    // Check that the sort icon has changed
    expect(sortIcon.text()).toContain(' ↓');
  });
});
