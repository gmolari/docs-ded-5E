import { Button } from "./Button"

export default function SectionButton({items, buttonStyle, textStyle, onPress}){

    return (
        items.data?.results.map(index => 
            <Button 
                onPress={onPress}
                style={
                    {
                        button: index != items.data.results[0] && buttonStyle,
                        text: textStyle
                    }
                } 
                key={`${index.name} ${items.data.results.indexOf(index)}`} 
                buttonTitle={index.name}
            />

        )
    )
}