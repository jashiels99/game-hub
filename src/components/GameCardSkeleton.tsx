import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
    return (
        <Card>
            <Skeleton borderRadius={10} height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}

export default GameCardSkeleton;
