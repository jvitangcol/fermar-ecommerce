import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

export function AddForm() {
  return (
    <>
      <form className="grid grid-cols-2 grid-rows-6 gap-2 h-full">
        {/* Description */}
        <div className="p-5 row-span-2 bg-secondary rounded-sm ">
          <h1 className="text-2xl font-medium mb-3">Description</h1>

          {/* Label and Inputs */}
          <div>
            <div>
              <Label className="text-muted-foreground mb-2">Product Name</Label>
              <Input
                type="text"
                className="bg-primary-foreground border border-primary"
              />
              <span className="text-sm text-destructive">Error message</span>
            </div>
            <div>
              <Label className="text-muted-foreground mb-2">
                Product Descriptions
              </Label>
              <Textarea className="bg-primary-foreground border border-primary" />
              <span className="text-sm text-destructive">Error message</span>
            </div>
          </div>
        </div>

        {/* General information */}
        <div className="p-5 row-span-3 bg-secondary rounded-sm border border-red-500">
          <h1 className="text-2xl font-medium mb-3">General Information </h1>
        </div>

        {/* Products Category */}
        <div className="p-5 row-span-2 bg-secondary rounded-sm">
          <h1 className="text-2xl font-medium mb-3">Products Category</h1>
          {/* Label and Inputs */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-muted-foreground mb-2">
                  Product Category
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-primary-foreground border border-primary">
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary-foreground border border-primary">
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="jeep-parts">Jeepney Parts</SelectItem>
                      <SelectItem value="hood-catch">Hood Catch</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <span className=" text-sm text-destructive">Error message</span>
              </div>

              <div>
                <Label className="text-muted-foreground mb-2">
                  Product Tags
                </Label>
                <Input
                  type="text"
                  className="bg-primary-foreground border border-primary"
                />
                <span className="text-sm text-destructive">Error message</span>
              </div>
            </div>

            <div>
              <Label className="text-muted-foreground mb-2">
                Product Category Short Description
              </Label>
              <Input
                type="text"
                className="bg-primary-foreground border border-primary"
              />
              <span className="text-sm text-destructive">Error message</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-5 row-span-2 bg-secondary rounded-sm border border-red-500">
          <h1 className="text-2xl font-medium mb-3">Photo Gallery</h1>
        </div>

        {/* Publish */}
        <div className="p-5 row-span-2 bg-secondary rounded-sm border border-red-500">
          <h1 className="text-2xl font-medium mb-3">Publish</h1>

          {/* Label and Inputs */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-muted-foreground mb-2">Status</Label>
                <Select>
                  <SelectTrigger className="w-full bg-primary-foreground border border-primary">
                    <SelectValue placeholder="Select a product status" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary-foreground border border-primary">
                    <SelectGroup>
                      <SelectItem value="jeep-parts">Published</SelectItem>
                      <SelectItem value="hood-catch">Private</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <span className=" text-sm text-destructive">Error message</span>
              </div>
              <div>
                <Label className="text-muted-foreground mb-2">Visibility</Label>
                <Select>
                  <SelectTrigger className="w-full bg-primary-foreground border border-primary">
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary-foreground border border-primary">
                    <SelectGroup>
                      <SelectItem value="jeep-parts">Hide</SelectItem>
                      <SelectItem value="hood-catch">Hood Catch</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <span className=" text-sm text-destructive">Error message</span>
              </div>
            </div>

            <div>
              <Label className="text-muted-foreground mb-2">
                Product Category Short Description
              </Label>
              <Input
                type="text"
                className="bg-primary-foreground border border-primary"
              />
              <span className="text-sm text-destructive">Error message</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="row-span-1 ju">
          <Button variant={"ghost"}>Cancel</Button>
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
}
