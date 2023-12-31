import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

function GameCardContainer({ children }: { children: ReactNode }) {
    return (
        <Box borderRadius={10} overflow="hidden" width="100%">
            {children}
        </Box>
    );
}

export default GameCardContainer;
