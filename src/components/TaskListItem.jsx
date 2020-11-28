import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    Text,
    ActivityIndicator,
    Image,
    StyleSheet,
} from 'react-native';
import {List, ListItem, Left, Right, Icon, Body, Thumbnail, CheckBox} from 'native-base';

import {container} from '../styles';


const defaultProps = {
    name: 'unnamed',
    description: '',
    isFinished: false,
};

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    isFinished: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
};

class TaskListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    handleLoad = () => {
        this.setState({ loading: false});
    };

    render() {
        const {loading} = this.state;
        const {
            id,
            name,
            description,
            isFinished,
            onPress,
        } = this.props;

    return (
        <ListItem>
            <CheckBox isFinished onPress={onPress}></CheckBox>
            <Left>
                {loading && (
                    <ActivityIndicator size="large" />
                )}
                
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
}

TaskListItem.defaultProps = defaultProps;
TaskListItem.propTypes = propTypes;

export default TaskListItem;
