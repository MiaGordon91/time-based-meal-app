import { Card, CardContent, Divider, List, ListItem, Typography } from '@mui/material'
import React from 'react'

interface CardListTemplateProps {
    recipeObject: string[] | undefined;
}

const CardListTemplate: React.FC<CardListTemplateProps> = ({recipeObject}) => {
 
// ACTION => move into a hook 
  let list; 
  let header;

  if(Array.isArray(recipeObject)){
   list =  
   <List>
        {recipeObject.map((item) => (
        <>
        <Divider />
            <ListItem>
                {item}
            </ListItem>
        <Divider />
        </>
        ))}
    </List> 
    header = 'Ingredients'
  } 
  else {
    list = <List>
            <Divider />
            {recipeObject}
            </List>
    header = 'Method'
  }
 
  return (
    <> 
    <Card
        className="px-10"
        sx={{ 
        maxWidth: "700px", 
        minHeight: '600px'
    }}
    >
        <CardContent>
            <Typography className="font-bold text-xl">
                {header}
            </Typography>
        </CardContent>     
        {list}
    </Card>
    </>
  )
}

export default CardListTemplate