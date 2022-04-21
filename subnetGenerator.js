function generateNew() {

    let startingIP = document.getElementById("starting-ip").value;
    let output = document.getElementById("new-output");
    let subnetLength = document.getElementById("subnet-length").value;
    let quantity = document.getElementById("quantity").value;
    let subnetLengthAlert = document.getElementById("subnet-length-alert");


    output.innerHTML = "";

    if(quantity === ""){
        quantity = 2000;
    }


    if(subnetLength > 0) {
        let oct2 = 0;
        let oct3 = 0;


        let count = 0;

        while (oct2 < 255 && count < quantity) {
            oct3 = 0;
            while (oct3 < 255 && count < quantity) {


                let firstHostAddress = oct3 + 1;
                let lastHostAddress;

                if (oct3 === 0) {
                    lastHostAddress = +subnetLength - +2;
                } else {
                    lastHostAddress = +oct3 + +subnetLength - +2;
                }


                //create our subnet count
                let subnetCount = document.createTextNode(String(count));
                let tdSubnetCount = document.createElement("td");
                tdSubnetCount.appendChild(subnetCount);

                //create our network address
                let networkAddress = document.createTextNode(startingIP + "." + oct2 + "." + oct3);
                let tdNetworkAddress = document.createElement("td");
                tdNetworkAddress.appendChild(networkAddress);

                //create our first host address
                let hostAddress;
                if (subnetLength !== "2") {
                    hostAddress = document.createTextNode(startingIP + "." + oct2 + "." + firstHostAddress);
                } else {
                    hostAddress = document.createTextNode("no address");
                }
                let tdHostAddress = document.createElement("td");
                tdHostAddress.appendChild(hostAddress);

                //create our last host address
                let lastHost;
                if (subnetLength !== "2") {
                    lastHost = document.createTextNode(startingIP + "." + oct2 + "." + lastHostAddress);
                } else {
                    lastHost = document.createTextNode("no address");

                }
                let tdLastAddress = document.createElement("td");
                tdLastAddress.appendChild(lastHost);

                //create our broadcast address
                let broadcastRaw = lastHostAddress + 1;
                let broadcast = document.createTextNode(startingIP + "." + oct2 + "." + broadcastRaw);
                let tdBroadcast = document.createElement("td");
                tdBroadcast.appendChild(broadcast);

                //create our usable hosts
                let usableHostsCount = +subnetLength - +2;
                let usableHosts = document.createTextNode(usableHostsCount);
                let tdUsableHosts = document.createElement("td");
                tdUsableHosts.appendChild(usableHosts);

                //create our table row
                let tableRow = document.createElement("tr");

                //append our content
                tableRow.appendChild(tdSubnetCount);
                tableRow.appendChild(tdNetworkAddress)
                tableRow.appendChild(tdHostAddress);
                tableRow.appendChild(tdLastAddress);
                tableRow.appendChild(tdBroadcast);
                tableRow.appendChild(tdUsableHosts);


                output.append(tableRow);

                count++;

                oct3 += +subnetLength;

            }

            oct2 += 1;
        }
    }


}
