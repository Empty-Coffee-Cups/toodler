import React, { Component } from 'react';
import {ActivityIndicator, Text, Modal} from 'react-native';
import {Container, Header, View, Button, Icon, Fab} from 'native-base';
import PropTypes from 'prop-types';

import {getAllLists, createList} from '../services/listService';
import List from '../components/List';
import { container } from '../styles';

const PropTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const defaultProps = {
    //style: null, 
};

class Listslists extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            error:false,
            items: [],
        };
    }



    async componentDidMount() {
        try {
            const items = await getAllLists();
            this.setstate({
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
    
    showAddListModal = (id) => {
        this.setState({
            showAddListModal: true,
        });
    };

    hideAddListModal = () => {
        this.setState({
            showAddListModal: false,
        });
    };

    async createList(List) {
        if (await createList(List).catch((e) => {
            console.log('Got error while creating list.', e);
        })) {
            // To update our Lists
            this.fetchItems();
            return true;
        }
        return false;
    }

    render() {
        const {navigation} = this.props;
        const {loading, error, items} = this.state;
        
        if (loading) {
            return <ActivityIndicator size="small"/>
        }
        if (error){
            return <Text>Error</Text>;
        }
        return (
            <Container>
                <Lists_list items={items} navigation={navigation} />
                <Fab direction="up"
                    containerStyle={{}}
                    position="bottomRight"
                >
                    <Icon name="add" />
                </Fab>
            </Container>
        );
    }
}

Listlists.prototype = PropTypes;
Listlists.defaultProps = defaultProps;

export default Listlists;
