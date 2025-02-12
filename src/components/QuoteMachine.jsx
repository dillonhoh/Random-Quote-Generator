
import { Typography } from "@mui/material";
import { Card, CardContent, CardActions } from "@mui/material";
import { Button } from "@mui/material"

export default function QuoteMachine(props){
    return(
        <Card>
            <CardContent>
    {props.selectedQuote ? 
        (
        <Typography>
            {props.selectedQuote.quote} - {props.selectedQuote.author}
        </Typography>
        ) : (
            <Typography>
                Loading quote...
            </Typography>
        )}

            </CardContent>
            <CardActions>
            <Button 
            size="small"
            onClick={props.generateRandomQuote}
        >New Quote
        </Button>
            </CardActions>
        </Card>
    )
}