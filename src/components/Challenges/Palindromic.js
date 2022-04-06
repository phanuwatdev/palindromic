import React,  {useState} from 'react'
import { Button, Container, Form, Grid, Header, Input, Segment, TextArea } from 'semantic-ui-react'

export default function Palindromic() {

    // const [palindrome, setPalindrome] = useState('babad')
    // const [input, setInput] = useState('cbbd')
    // const [input, setInput] = useState('askzxcvcxzwe')
    // const [input, setInput] = useState('zxvdsawfqwfcvbnbvcggresdfewegwegergrt')
        
    const [palindrome, setPalindrome] = useState('')
    const [output, setOutput] = useState('')


    const handleCheckPalindromic = () => {
        let value = palindrome

        //Check Palindrome
        if(value.length > 0){
            if (value === value.split('').reverse().join('')) {
                setOutput(value + ' Is Palindrome.')
            }else{
                //If Not Palindrome Find Longest Palindrome Substring
                var maxLongestString = 0;
                setOutput(value + ' Is Not Palindrome.')
    
                for(let i = 0; i < value.length; i++){
                    let subStringFirstIndex = value.substring(i, value.length)
    
                    for(let j = subStringFirstIndex.length; j >= 0; j--){
                        let subStringLastIndex = subStringFirstIndex.substring(0, j)
                        //1 Letter are Pallindrome
                        if(subStringLastIndex.length > 1){
                            if(subStringLastIndex === subStringLastIndex.split('').reverse().join('')){
                                if(subStringLastIndex.length > maxLongestString){
                                    maxLongestString = subStringLastIndex.length
                                    setOutput(`${value + ' Is Not Palindrome.' + '\nLongest Palindrome is: ' + subStringLastIndex}`) // eslint-disable-line prefer-template
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return (
        <div style={{ marginTop: '50px' }}>
            <Container>
                <Header as='h1'>Palindromic JavaScript</Header>
                <Grid divided='vertically' style={{ marginTop: '30px' }}>
                    <Grid.Row columns={2}>
                        <Grid.Column mobile={16} tablet={16} computer={8} style={{ marginBottom: '50px' }}>
                            <div>
                                <Header as='h3'>INPUT</Header>
                                <Input 
                                    placeholder='type some string' 
                                    fluid
                                    value={palindrome}
                                    onChange={(event, {value}) => setPalindrome(value)}
                                />
                            </div>

                            <div style={{ marginTop: '20px' }}>
                                <Button animated='fade' onClick={()=>handleCheckPalindromic()}>
                                    <Button.Content visible>Submit</Button.Content>
                                    <Button.Content hidden>Submit</Button.Content>
                                </Button>
                            </div>
                            <Header as='h3'>OUTPUT</Header>
                            <Form>
                                <TextArea 
                                    placeholder='Result' 
                                    rows={2}
                                    value={output}
                                />
                            </Form>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={8}>
                            <Header as='h3'>CODE SANDBOX</Header>
                            <Segment inverted>
                                <iframe
                                    src='https://codesandbox.io/embed/festive-moon-9d95cv?fontsize=14&hidenavigation=1&theme=dark'
                                    width= '100%'
                                    height= '600px'
                                    title='paalidrome'
                                />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
