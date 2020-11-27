import React from 'react';
import { ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';

import { getAllLists } from '../services/boardService';
import List_list from '../components/List_list';

const propTypes = {
    navigation: PropTypes.shape({
        navigation: PropTypes.func.isRequried, 
    }).isRequired,
};

const defaultProps = {
};

class Lists extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            error: false,
            items: [],
        };
    }

async componentDidMount() {
    try {
        const items = await getAllLists();
        this.setState({
            loading: false,
            items,
        });
    }catch (e) {
        this.setState({
            loading: false,
            error: true,
        });
    }
}    

render() {
    const { navigation: {state: {params}}} = this.props;
    const {id} = params;
    const { loading, error, items } = this.state;

    if (loading) {
        return <ActivityIndicator size="small"/>;
    }
    if (error) {
        return <Text>Error</Text>;
    }
    return (
        <Text>{id}</Text>
    );
}
} 

Lists.propTypes = propTypes;
Lists.defaultProps = defaultProps;