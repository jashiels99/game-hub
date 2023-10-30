import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
];

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string | null;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)?.label;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder ?? 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((sortOrder) => (
                    <MenuItem
                        key={sortOrder.value}
                        value={sortOrder.value}
                        onClick={() => onSelectSortOrder(sortOrder.value)}
                    >
                        {sortOrder.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;
