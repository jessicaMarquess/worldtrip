import { Grid, GridItem } from '@chakra-ui/react'
import { ItemPoint } from './ItemPoint';

export default function ItemPoints() {
  return (
    <Grid
        templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
        w='100%'
        justifyContent='space-between'
        alignItems='center'
        mt={['10', '32']}
        mx="auto"
        maxW="1160px"
        gap={[1, 5]}
      >
        <GridItem>
          <ItemPoint icon="cocktail" title="vida noturna"/>
        </GridItem>
        <GridItem>
          <ItemPoint icon="surf" title="praia"/>
        </GridItem>
        <GridItem>
          <ItemPoint icon="building" title="moderno"/>
        </GridItem>
        <GridItem>
          <ItemPoint icon="museum" title="clássico"/>
        </GridItem>
        <GridItem colSpan={[2,2,2,1]}>
          <ItemPoint icon="earth" title="e mais..."/>
        </GridItem>
      </Grid>
  )
}