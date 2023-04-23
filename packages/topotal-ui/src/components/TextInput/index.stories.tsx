import { TextInput } from '.'

export default { title: 'components/TextInput' }

export const all = () => (
  <>
    <TextInput />
    <TextInput startIconName="search" placeholder="Search" />
    <TextInput placeholder="Sample Placeholder" />
    <TextInput secureTextEntry placeholder="Password" />
    <TextInput error />
    <TextInput value="default value" onChangeText={value => console.info(value)}/>
    <TextInput value="disabled" disabled />
    <TextInput size="medium" />
    <TextInput size="medium" startIconName="search" placeholder="Search" />
    <TextInput size="medium" placeholder="Sample Placeholder" />
    <TextInput size="medium" secureTextEntry placeholder="Password"/>
    <TextInput size="medium" error />
    <TextInput size="medium" value="default value" onChangeText={value => console.info(value)}/>
    <TextInput size="medium" value="press some kind of key" onKeyPress={event => console.info(event.nativeEvent.key)}/>
    <TextInput size="medium" value="press command + enter" onCmdEnterPress={() => console.log('command and enter pressed')}/>
    <TextInput size="medium" value="press some kind of key or command + enter" onKeyPress={event => console.info(event.nativeEvent.key)} onCmdEnterPress={() => console.log('command and enter pressed')}/>
  </>
)
