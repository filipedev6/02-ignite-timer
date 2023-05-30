import { HeaderContainer } from './styles'

import LogoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Header() {
  const { activeCycle } = useContext(CyclesContext)

  return (
    <HeaderContainer>
      <div>
        <img src={LogoIgnite} alt="" />

        {!!activeCycle && (
          <p>
            Trabalhando em: <strong>{activeCycle.task}</strong>
          </p>
        )}
      </div>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
