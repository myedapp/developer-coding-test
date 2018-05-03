
import React from 'react';

/* eslint react/prop-types: 0 */

const styles = {
  outerBox: {
    width: 200,
    textAlign: 'left',
    paddingLeft: 10,
    border: '1px solid #ccc',
    backgroundColor: '#F6F6F6',
  },
  inputBox: {
    borderWidth: 0,
    fontSize: 15,
    backgroundColor: '#F6F6F6',
  },
  searchBox: {
    display: 'inline-block',
    float: 'right',
    marginRight: 10,
    fontSize: 16,
  },
};

/**
 * Search the special text
 * miss handle function, the previous version is only for memory search.
 * according to the design, it will work with server side search.
 *
 * @param {*} props
 */
const InnerSearch = props => (
  <div style={{ display: 'flex' }} className="innersearch-box">
    <div style={{
      width: 'calc(100% - 30px)',
      textAlign: 'right',
      marginTop: 30,
      marginBottom: 30,
      }}
    >
      {props.children}
      <div style={styles.outerBox}>
        <input
          style={styles.inputBox}
          onChange={(e, newVal) => {
            props.setSearch(e, newVal);
          }}
          placeholder="Search..."
        />
        <span style={styles.searchBox}><i className="fa fa-search" /></span>
      </div>
    </div>
  </div>
);

export default InnerSearch;
