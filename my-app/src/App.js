import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>Admin Profile</li>
          <li>Student</li>
          <li>Company</li>
          <li>Analysis</li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <h3>Placement Assistant</h3>
        </div>
        <div className="shadow-box">
          <p>Dashboard > Student</p>
          <table className="bullet-list">
            <tr>▲ Enter Student Details</tr>
            <p></p>
            <tr>
              ▲ View Student Details
              <span className="dropdown-arrow"> ➔ </span>
              <select className="dropdown">
                <option value="detail1">Detail 1</option>
                <option value="detail2">Detail 2</option>
                <option value="detail3">Detail 3</option>
              </select>
            </tr>
          </table>
          <p></p>

          {/* New Content Box Container */}
          <div className="content-box">
            {/* Batch, Program, and Search Filters */}
            <div className="filter-section">
              <label>Batch:-</label>
              <select>
                <option>21-23</option>
                <option>22-24</option>
              </select>
              <label>Program:-</label>
              <select>
                <option>MCA</option>
                <option>BCA</option>
              </select>
              <input type="text" placeholder="Search" className="search-input" />
              <button>Search</button>
            </div>

            {/* Filters for SSC, HSC, Experience */}
            <div className="filter-options">
              <p></p>
              <label>SSC:</label>
              <select>
                <option>&lt;50%</option>
                <option>&gt;50%</option>
              </select>
              <p></p>              <p></p>               <p></p>
              <label>HSC:</label>
              <select>
                <option>&lt;50%</option>
                <option>&gt;50%</option>
              </select>
              <p></p>              <p></p>               <p></p>
              <label>Experience:</label>
              <select>
                <option>1 year</option>
                <option>2 years</option>
                <option>3 years</option>
              </select>
            </div>

            {/* Student List Table */}
            <div className="student-list">
              <table>
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Student 1</td>
                    <td><button>View</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Student 2</td>
                    <td><button>View</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Student 3</td>
                    <td><button>View</button></td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p></p>
        <p>Showing <b>2 </b>of <b>25</b></p>
      </div>
    </div>
  );
}

export default App;