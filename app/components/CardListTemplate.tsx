import { Card, CardActions, CardContent, Divider, List, ListItem, Typography } from "@mui/material";
import BackLink from "./BackLink";

interface CardListTemplateProps {
    recipeObject: string[] | string | undefined;
}

const CardListTemplate: React.FC<CardListTemplateProps> = ({recipeObject}) => {
  let list; 
  let header;

  if(Array.isArray(recipeObject)){
   list =  
    <List>
        {recipeObject.map((item, index) => (
        <>
        <Divider />
            <ListItem>
                <Typography key={index} sx={{fontSize: {xs: "0.75rem", md: "1.25rem"}}}>
                    {item}
                </Typography> 
            </ListItem>
        <Divider />
        </>
        ))}
    </List>; 
    
    header = "Ingredients";
  } 
  else {
    list = 
    <>
    <List>
        <Divider />
        <Typography sx={{fontSize: {xs: "0.75rem", md: "1.25rem"}, paddingTop: "1.25rem", padding: "2rem"}}>
            {recipeObject}
        </Typography>        
    </List>
    <CardActions 
        sx={{ 
            padding: "1.75rem",
            paddingTop:"5rem"
        }}>

        <BackLink />
    </CardActions>
    </>;

    header = "Method";
  }
 
  return (
    <> 
    <Card
        sx={{ 
        maxWidth:{sm: "500px", md:"700px"}, 
        minHeight:"300px",
        padding:{xs:"1rem", md:"2rem"}
    }}
    >
        <CardContent>
            <Typography sx={{fontSize: {xs: "1rem", md: "1.5rem"}, fontWeight: 700}}>
                {header}
            </Typography>
        </CardContent>     
        {list}    
    </Card>
    </>
  );
};

export default CardListTemplate;