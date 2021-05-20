from flask import Flask, request
from flask_restful import Api, Resource, reqparse
from flask_jwt import JWT, jwt_required

from security import authenticate, identity

app = Flask(__name__)
app.secret_key = "yes, this is bad"
api = Api(app)
jwt = JWT(app, authenticate, identity)

items = []


class Item(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("price", type=float, required=True, help="Item price")

    # @jwt_required()
    def get(self, name):
        item = get_item(name)
        return {"item": item}, 200 if item else 404

    # @jwt_required()
    def post(self, name):
        if get_item(name):
            return {"message": f"An item with name '{name}' already exists."}, 400

        data = Item.parser.parse_args()
        item = {"name": name, "price": data["price"]}
        items.append(item)
        return item, 201

    # @jwt_required()
    def delete(self, name):
        item = get_item(name)

        if not item:
            return {"message": f"An item with name '{name}' doesn't exist."}, 400

        items.remove(item)
        return {"message": "Item was deleted."}

    # @jwt_required()
    def put(self, name):
        data = Item.parser.parse_args()
        item = get_item(name)
        if item:
            item.update(data)
        else:
            item = {"name": name, "price": data["price"]}
            items.append(item)
        return item


class ItemList(Resource):
    def get(self):
        return {"items": items}


def get_item(name):
    return next(filter(lambda x: x["name"] == name, items), None)


api.add_resource(Item, "/item/<string:name>")
api.add_resource(ItemList, "/items")


if __name__ == "__main__":
    app.run(debug=True)
