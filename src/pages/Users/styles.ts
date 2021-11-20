import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentTable = styled.div`
  height: 91vh;
`

export const UserTable = styled.table`
  margin-top: 9vh;
  border-collapse: collapse;
  width: 100%;

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }
    
    tr:nth-child(even) {
    background-color: #dddddd;
    }

`;