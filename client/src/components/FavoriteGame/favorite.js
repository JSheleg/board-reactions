import { Component } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotFavoriteIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

class Favorited extends Component {

constructor(props) {
    super(props)
    this.state = { favorited : props.favorited }
  }

toggle = () => {
    let localFavorited = this.state.favorited;
    localFavorited = !localFavorited;
    this.setState({ favorited: localFavorited });
};

render () {
    return (
        <div className="heart" onClick={ () => this.toggle()}>
            {this.state.favorited === false ? (
                <IconButton icon ={NotFavoriteIcon} />
            ) : (
                <IconButton icon={FavoriteIcon} />
            )}
        </div>
    );
}

}

export default Favorited;