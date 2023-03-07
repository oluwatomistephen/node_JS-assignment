const buffer = Buffer.alloc(5);

buffer[0] = 0x68;
buffer[1] = 0x65;
buffer[2] = 0x6c;
buffer[3] = 0x6c;
buffer[4] = 0x6f;

console.log(buffer.toString());
