import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class Item extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            done: (this.props.data.done == 1) ? styles.done : styles.undone
        };
        this.marcar = this.marcar.bind(this);
        this.url = props.url;
    }

    marcar()
    {
        let state = this.state;
        let done;
        let url = this.url+'/'+this.props.data.id;

        if (state.done == styles.undone) {
            state.done = styles.done;
            done = 'sim';
        } else {
            state.done = styles.undone;
            done = 'nao';
        }

        fetch(url, {
            method: 'PUT',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              done: done
            })
          })
            .then((response)=>response.json())
            .then((json)=>{})

        this.setState(state);
    }

    render()
    {
        return(
            <View style={styles.area}>
                <TouchableHighlight style={[styles.marcarArea, this.state.done]} onPress={this.marcar}>
                    <View></View>
                </TouchableHighlight>
                <Text>{this.props.data.item}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    area: {
        padding: 10,    
        borderBottomWidth: 1, 
        borderColor: '#CCCCCC',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',        
    },
    marcarArea: {        
        width: 40,
        height:40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50
    },
    undone: {
        backgroundColor: '#CCCCCC'
    }, 
    done: {
        backgroundColor: '#00FF00'
    }
});