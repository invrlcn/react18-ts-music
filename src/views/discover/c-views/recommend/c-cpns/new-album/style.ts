import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 15px;

  > .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 686px;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    padding: 0 5px;
    background-color: #f5f5f5;
    overflow: hidden;

    .arrow {
      position: relative;
      top: -12px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
      overflow: hidden;
      flex: 1;

      .album-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
