import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createColaboradores1604025800899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name:'colaboradores',
            columns: [
                {
                  name:'id',
                  type:'integer',
                  unsigned:true,
                  isPrimary:true,
                  isGenerated:true,
                  generationStrategy:'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name:'latitude',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                {
                    name:'longitude',
                    type:'decimal',
                    scale:2,
                    precision:2,
                },
                {
                    name:'cep',
                    type:'text',

                },
                {
                    name:'street',
                    type:'text',
                },
                {
                    name:'number',
                    type:'text',
                },
                {
                    name:'district',
                    type:'text',
                },
                {
                    name:'about',
                    type:'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name:'open_on_weekends',
                    type:'boolean',
                    default:false,
                },
            ],
        }))
        //realizar alterações
        //criar tabela, criar campo, deletar campo
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('colaboradores');
        //desfazer o q foi feito no up
    }

}
