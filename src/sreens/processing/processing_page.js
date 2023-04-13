// ProcessingPage.js
import React from 'react';
import { View, Text } from 'react-native';
import SharedPreferences from '../../database/shared_pref';

class ProcessingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTime: null,
      finalTime: null,
      processingTime: null,
    };
  }

  componentDidMount() {
    this.sharedPrefTest();
  }

  async sharedPrefTest() {
    const initialTime = new Date();
    const database = SharedPreferences;
    const numberIterations = 100;
    for (let i = 0; i < numberIterations; i++) {
      await database.setValue('number', i.toString());
      const number = await database.getValue('number');
    }
    const finalTime = new Date();
    const processingTime = finalTime.getTime() - initialTime.getTime();
    this.setState({ processingTime });
  }

  render() {
    const { processingTime } = this.state;
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'black', width: 200 }}>
          {`Tempo de processamento: ${processingTime} milissegundos!`}
        </Text>
      </View>
    );
  }
}

export default ProcessingPage;