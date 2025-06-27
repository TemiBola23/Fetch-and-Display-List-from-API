import { render, screen } from '@testing-library/react';
import ListComponent from '../components/ListComponent';

describe('ListComponent', () => {
  it('renders list items', () => {
    const items = [{id:1,name:'Alice'},{id:2,name:'Bob'}];
    render(<ListComponent items={items} renderItem={i=><span>{i.name}</span>}/>);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('renders fallback on empty', () => {
    render(<ListComponent items={[]} />);
    expect(screen.getByText(/No items to display/i)).toBeInTheDocument();
  });
});