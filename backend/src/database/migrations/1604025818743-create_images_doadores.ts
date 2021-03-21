import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createImagesDoadores1604025818743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
            name:'imagesDoadores',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment',
                  },
                  {
                    name:'path',
                    type:'varchar',
                  },
                  {
                      name:'doador_id',
                      type:'integer',
                  }
            ],
            foreignKeys:[
                {
                    name:'ImageDoador',
                    columnNames:['doador_id'],
                    referencedTableName:'doadores',
                    referencedColumnNames: ['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagesDoadores');
    }

}
