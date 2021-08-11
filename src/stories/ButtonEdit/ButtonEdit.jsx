import React from 'react';
import PropTypes from 'prop-types';

// para escrever algo no arquivi precisa seguir esse formato 

/**
 * Primeiro componente editavel
 */

// Listages de props do componente e chamado do mesmo
// é nesse momente que definira o conponente a ser renderizado na pagina
export const ButtonEdit = ({ 
  state,
  color, 
  backgroundColor, 
  size, 
  label, 
  ...props 
}) => {
  const mode = state ? 
    'storybook-button--primary' : 
      'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{color, backgroundColor} && { color, backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

// Defina os tipos de pops que iram aparecer na Docs no storybook e descrições
ButtonEdit.propTypes = {
  /**
   * O State define como o botão vai estar se é um primary ou secondary
   */
  state: PropTypes.bool,
  /**
   * Podera alterar a cor da letra do botão
   */
  color: PropTypes.string,
  /**
   * Podera alterar a cor de fundo do botão
   */
  backgroundColor: PropTypes.string,
  /**
   * Dinira um tamanho ao botão
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Podera alterar o nome escrito no botão
   */
  label: PropTypes.string.isRequired,
  /**
   * Podera definir uma função se ser reapizada no click
   */
  onClick: PropTypes.func,
}

// aqui ira definir um estado default esse estado é quando não tem nada definido a ele
ButtonEdit.defaultProps = {
  color: null,
  backgroundColor: null,
  state: false,
  size: 'medium',
  onClick: undefined,
}
