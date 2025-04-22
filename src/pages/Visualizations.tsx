import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeBalham } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
// Define an interface for the Google Sheets API response
interface GoogleSheetsResponse {
  range: string;
  majorDimension: string;
  values: string[][];
}

function Visualizations() {
  const [data, setData] = useState<GoogleSheetsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Access the environment variable with the VITE_ prefix
        const apiKey = import.meta.env.VITE_SHEETS_API_KEY;
        console.log("API Key:", apiKey);

        if (!apiKey) {
          throw new Error("API key is not defined in environment variables");
        }

        const sheetId = "1_nBlsL7_bIA2QA31d8_i0ikdQ31Xf7w_3dkCFy9S3Yw";
        const sheetRange = "Domestic Graduate Students";

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${apiKey}`;
        // console.log("Request URL:", url);

        const response = await fetch(url);
        // console.log("Response status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error response:", errorText);
          throw new Error(
            `HTTP error! Status: ${response.status}, Details: ${errorText}`
          );
        }

        const result = await response.json();
        console.log("Response data:", result);
        setData(result);
        setLoading(false);
      } catch (err: unknown) {
        console.error("Error fetching data:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!data) return <div className="p-4">No data available</div>;

  let columnDefs: string[] = data?.values[0];
  columnDefs = columnDefs.slice(0, 8);
  columnDefs[7] = "Links";
  //   const rows = data?.values.map((row) => {
  //     columnDefs?.map((col) => {
  //       return x;
  //     });
  //   });
  const columns = columnDefs?.map((col, idx) => {
    return {
      field: col,
      autoHeight: true, // allows AG Grid to grow row height based on content
      cellStyle: {
        whiteSpace: "normal", // this is key to wrapping
        wordBreak: "break-word", // optional, better wrapping behavior
        lineHeight: "1.2rem", // optional, tweak spacing
      },
      sortable: true, // enable sorting
      filter: true, // enable filtering
      //   editable: true,
      ...(idx === 7 && {
        cellRenderer: (params: any) => {
          return <span dangerouslySetInnerHTML={{ __html: params.value }} />;
        },
      }),
    };
  });

  type Dictionary = { [key: string]: string };

  const rows: Dictionary[] = [];

  for (let i = 1; i < data?.values.length; i++) {
    const currRow: { [key: string]: string } = {};

    for (let j = 0; j < 8; j++) {
      currRow[columnDefs[j]] = data.values[i][j];
    }

    // Process remaining columns as links
    const links: string[] = [];
    for (let j = 7; j + 1 < data.values[i].length; j += 2) {
      const title = data.values[i][j];
      const url = data.values[i][j + 1];
      if (title && url) {
        links.push(
          `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`
        );
      }
    }

    // Assign to the 7th column (index 6)
    const linkField = columnDefs[7];
    currRow[linkField] = links.join(", ");

    rows.push(currRow);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data</h1>
      <div className="h-screen w-full ag-theme-alpine">
        <AgGridReact
          theme={themeBalham}
          rowData={rows}
          columnDefs={columns}
          // defaultColDef={{
          //   resizable: true, // 👈 This enables column resizing
          // }}
          //   onRowClicked={onRowClicked}
          //   getRowHeight={getRowHeight}
          rowSelection="multiple" // or "single"
          pagination={true}
          paginationPageSize={10}
          suppressClipboardPaste={false}
          allowContextMenuWithControlKey={true}
          suppressContextMenu={false}
        />
      </div>
    </div>
  );
}

export default Visualizations;
