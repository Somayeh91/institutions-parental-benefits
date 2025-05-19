import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeBalham } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import * as XLSX from "xlsx";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
// Define an interface for the Google Sheets API response

function Data() {
  const [data, setData] = useState<string[][]>([]);
  const [type, setType] = useState<string>("grad-students");
  const [title, setTitle] = useState<string>("Domestic Graduate Students");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type === "international-grad-students") {
      setTitle("International Graduate Students");
    } else if (type === "postdocs") {
      setTitle("PostDocs");
    } else {
      setTitle("Domestic Graduate Students");
    }
    fetch(import.meta.env.BASE_URL + "AI-collected-information.xlsx")
      .then((res) => res.arrayBuffer())
      .catch((error) => {
        console.error("Error fetching the file:", error);
        setError("Failed to fetch the file");
        setLoading(false);
      })
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        let sheetName = workbook.SheetNames[0];
        if (type === "international-grad-students") {
          sheetName = workbook.SheetNames[1];
        } else if (type === "postdocs") {
          sheetName = workbook.SheetNames[2];
        }
        const worksheet = workbook.Sheets[sheetName];
        let parsedData = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
        }) as string[][];
        parsedData = parsedData.filter((row: any[]) =>
          row.some((cell) => cell !== null && cell !== undefined && cell !== "")
        );
        setData(parsedData as string[][]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching or parsing the file:", error);
        setError("Failed to fetch or parse the file");
        setLoading(false);
      });
  }, [title, type]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  // good code
  if (!data || data.length === 0 || !Array.isArray(data[0])) {
    return <div className="p-4">No data available</div>;
  }

  let columnDefs: string[] = data[0].map(String); // Convert to string
  columnDefs = columnDefs.slice(0, 8); // First 8 columns contain data
  columnDefs[7] = "Links"; // Rename the 8th column to "Links"
  // console.log(columnDefs);
  //good code
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

  for (let i = 1; i < data?.length; i++) {
    const currRow: { [key: string]: string } = {};

    for (let j = 0; j < 8; j++) {
      currRow[columnDefs[j]] = data[i][j];
    }

    // Process remaining columns as links
    const links: string[] = [];
    for (let j = 7; j + 1 < data[0].length; j += 2) {
      const title = data[i][j];
      const url = data[i][j + 1];
      if (title && url) {
        links.push(
          `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`
        );
      }
    }

    // Assign to the 8th column (index 6)
    const linkField = columnDefs[7];
    currRow[linkField] = links.join(", ");

    rows.push(currRow);
  }

  return (
    // <div>
    //   <h1>Excel Data</h1>
    //   <pre>{JSON.stringify(data, null, 2)}</pre>
    // </div>
    <div className="pt-[4.5rem]">
      <div className="flex justify-center mb-4 mt-4">
        <div className="w-full max-w-xs">
          <label className="label flex justify-center">
            <span className="label-text mb-2">Select Group</span>
          </label>
          <select
            className="select select-primary w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
            disabled={loading}
          >
            <option value="domestic-grad-students">
              Domestic Graduate Students
            </option>
            <option value="international-grad-students">
              International Graduate Students
            </option>
            <option value="postdocs">PostDocs</option>
          </select>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
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
            paginationPageSize={20}
            suppressClipboardPaste={false}
            allowContextMenuWithControlKey={true}
            suppressContextMenu={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Data;
