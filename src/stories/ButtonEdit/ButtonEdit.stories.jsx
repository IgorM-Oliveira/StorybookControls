// Nessa aparte do codigo, está difinida a localização e chamada do botão

import React from 'react'
import { ButtonEdit } from './ButtonEdit'; // chamada do botão

export default { 
    title: 'Documentação/Botão Editavel', // defina onde vai ficar o arquive e nome
    component: ButtonEdit,
    argTypes: { // o argTypes é uma função do storybook para o controle de props do component
        color: { control: 'color' },
        backgroundColor: { control: 'color' },
    }, 
}

// o Template faz a linha entre os componentes do Botão e Storybook
const Template = (args) => <ButtonEdit {...args} />

// e por fim o "Template.bind()", que faz com que modifiquemos o stado dos componentes
// e tambem pode excutar a função de initialValue para as props
export const Controls = Template.bind({})
Controls.args = {
    state: true,
    label: 'Button Editavel',
    size: 'large'
}