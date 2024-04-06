import styled from "styled-components"

const HeaderComponent = () => {
    const StyledHeaderComponent = styled.header`
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 70px;
        background-color: #EDB784;
        margin-bottom: 15px;
        .header-container{
            display: flex;
            align-items: center;
            width: calc(100% - 30px);
            max-width: 500px;
        }

    `

    return(
        <StyledHeaderComponent>
            <div className="header-container">
                <span>João Almeida</span>
            </div>
        </StyledHeaderComponent>
    )
}

export default HeaderComponent;