import platforms from '../data/platforms';

function usePlatforms() {
    return { data: platforms, isLoading: false, error: null };
}

export default usePlatforms;
