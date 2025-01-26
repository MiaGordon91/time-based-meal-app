import { CardHeader } from '@material-tailwind/react';
import { Card, CardContent, Divider, List, ListItem, Typography } from '@mui/material'
import React from 'react'

interface CardListTemplateProps {
    children: any;
}

const CardListTemplate: React.FC<CardListTemplateProps> = ({children}) => {
 
// ACTION => move into a hook 
  var list; 
  var header;
  var maxWidth;

  if(Array.isArray(children)){
   list =  
   <List>
        {children.map((item) => (
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
    maxWidth = "400px"
  } 
  else {
    list = <List>
            <Divider />
            {children}
            </List>
    header = 'Method'
    maxWidth = "700px"
  }
 
  return (
    <> 
    <Card
        className="px-10"
        sx={{ 
        maxWidth: maxWidth, 
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