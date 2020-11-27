import { FlatList } from 'react-native';
import { List, ListItem } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import ListItem from './ListItem';

const defaultProps = {
    items: [{
        id: -1,
        name: 'unnamed',
    }];
};

const PropTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.number,
        }),
    ),
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const keyExtractor = ({ id }) => id.toString();

class List extends React.Component {
    renderItem = ({ item }) => {
        const {id,name,thumbnailPhoto} = item;
        const { navigation: { navigate } } = this.props;
        return (
            <ListItem
                id={id}
                name={name}
                thumbnailPhoto={thumbnailPhoto}
                onPress={() => navigate('List', {id})}
            />
        );
    };

    render() {
        const {item} = this.props;
        return (
            <List>
                <FlatList
                data={item}
                renderItem={this.renderItem}
                keyExtractor={keyExtractor}
            />
            </List>
        );
    }
}

List.PropTypes = PropTypes;
List.defaultProps = defaultProps;
export default List;