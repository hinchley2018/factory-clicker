# factory-clicker
- a game about running an auto manufactoring company
- this repo is a monorepo that contains all assets

## Tech stack
- most projects are built in `golang`, `react`, `nodejs`, `mongodb`, but this may change over time

## [Architecture](docs/FactoryClicker-arch.png)
- [factory-clicker-game](factory-clicker-game) : prototype game in react, to make api wiring easier
- [parts-ordering](parts-ordering) : parts ordering service (from vendors or internal parts manufacturing)
- [inventory-service](inventory-service) : parts we own, and vehicles in the warehouse not sold yet
- [mock-customer-buying](mock-customer-buying) : simulate customer demand
- [employees-service](employees-service) : enable async workers (idle workers) in game
- [sales-service](sales-service) : sells cars to customers if demand is available (allows pre-orders)
