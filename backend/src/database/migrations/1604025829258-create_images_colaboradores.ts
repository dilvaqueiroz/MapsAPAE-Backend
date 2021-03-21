import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createImagesColaboradores1604025829258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
            name:'imagesColaboradores',
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
                      name:'colaborador_id',
                      type:'integer',
                  }
            ],
            foreignKeys:[
                {
                    name:'ImageColaborador',
                    columnNames:['colaborador_id'],
                    referencedTableName:'colaboradores',
                    referencedColumnNames: ['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagesColaboradores');
    }

}
