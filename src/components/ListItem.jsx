import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    Text,
    ActivityIndicator,
    Image,
    StyleSheet,
} from 'react-native';
import {List, ListItem, Left, Right, Icon, Body, Thumbnail} from 'native-base';

import {container} from '../styles';
import BoardListItem from './BoardListItem';

const defaultProps = {
    name: 'unnamed',
    thumbnailPhoto: '',
};

const PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
    onPress: PropTypes.func.isRequired,
};

class ListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }
}
handleLoad = () => {
    this.setState({ loading: false});
};

render() {
    const {loading} = this.state;
    const {
        id,
        name,
        thumbnailPhoto,
        onPress,
    } = this.props;

    return (
        <ListItem thumbnail onPress={onPress}>
            <Left>
                {loading && (
                    <ActivityIndicator size="large" />
                )}
                <Thumbnail square source={{ uri: thumbnailPhoto }} onLoad={this.handleLoad} />
            </Left>
            <Body>
                <Text>{name}</Text>
            </Body>
            <Right>
                <Icon name="arrow-forward" />
            </Right>
        </ListItem>
    );
}

ListItem.defaultProps = defaultProps;
ListItem.propTypes = propTypes;

export default BoardListItem;
