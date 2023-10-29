import { Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

function GenreList() {
    const { genres, error, isLoading } = useGenres();

    return (
        <ul>
            {genres.map((genre) => (
                <Text key={genre.id}>{genre.name}</Text>
            ))}
        </ul>
    );
}

export default GenreList;
