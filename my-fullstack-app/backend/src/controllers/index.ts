class IndexController {
    public getItems(req: Request, res: Response): void {
        // Logic to retrieve items
        res.json({ message: "Items retrieved successfully" });
    }

    public createItem(req: Request, res: Response): void {
        // Logic to create a new item
        res.status(201).json({ message: "Item created successfully" });
    }
}

export default IndexController;