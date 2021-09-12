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
    <TextInput size="medium" />
    <TextInput size="medium" startIconName="search" placeholder="Search" />
    <TextInput size="medium" placeholder="Sample Placeholder" />
    <TextInput size="medium" secureTextEntry placeholder="Password"/>
    <TextInput size="medium" error />
    <TextInput size="medium" value="default value" onChangeText={value => console.info(value)}/>
  </>
)
