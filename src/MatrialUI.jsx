import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


function MatrialU() {

    let handleClick = () => {
        console.log("button was clicked");
    }


    return (
        <>
            <h2>Material UI Demo</h2>
            <Button variant="contained" onClick={handleClick}>CLick me!</Button>
            <Button variant="outlined" size="small" color="success">Success</Button>
            <Button startIcon={<DeleteIcon />} variant="outlined" color="error">
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </>
    )
}

export default MatrialU;
