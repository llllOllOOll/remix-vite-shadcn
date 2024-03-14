import { Button } from "~/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"


export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
          <TableHead>
            ID
          </TableHead>
          <TableHead>
            Product
          </TableHead>
          <TableHead>
            Price 
          </TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>98908089890</TableCell>
              <TableCell>98908089890</TableCell>
              <TableCell>98908089890</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>
    </div>
  )
}
