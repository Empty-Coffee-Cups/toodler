import { FlatList } from 'react-native';
import { List, ListItem } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import TaskListItem from './TaskListItem';

const defaultProps = {
    items: [{
        id: -1,
        name: 'unnamed',
    }]
};

const propTypes = {
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

class Task extends React.Component {
    renderItem = ({ item }) => {
        const {id,name,description,isFinished} = item;
        const { navigation: { navigate } } = this.props;
        return (
            <TaskListItem
                id={id}
                name={name}
                description={description}
                isFinished={isFinished}
                onPress={() => isFinished = !isFinished}
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

Task.propTypes = propTypes;
Task.defaultProps = defaultProps;
export default Task;