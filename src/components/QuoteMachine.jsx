
import { Typography } from "@mui/material";
import { Card, CardContent, CardActions } from "@mui/material";
import { Button } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function QuoteMachine(props){
    return(
        <Card>
            <CardContent>
            {props.selectedQuote ? 
            (<Typography>
                {props.selectedQuote.quote} - {props.selectedQuote.author}
            </Typography>) : 
            (<Typography>
                Loading quote...
            </Typography>
            )}
            </CardContent>
            
            <CardActions>
                <Button 
                size="small"
                color='black'
                onClick={props.generateRandomQuote}>
                New Quote</Button>
            
                <IconButton
                
                component="a"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.selectedQuote.quote)}`}
                target="_blank"
                rel="noopener noreferrer"
>
                    <FontAwesomeIcon icon={faTwitter} size="md">
                    
                    </FontAwesomeIcon>
                </IconButton>
            </CardActions>
        </Card>
    )
}